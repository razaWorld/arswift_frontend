import React, { useEffect, useState, useCallback } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import { colors } from '../../../theme';
import { CustomInput, Header, HeaderTitle } from '../../../components/global';
import { FleetCard, HeaderButtons } from '../../../components/fleetManagement';
import { SearchSvg } from '../../../assets/svg/svg';
import { getFleetList } from '../../../services/fleetServices';
const FleetManagement = () => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  const LIMIT = 20;

  // Fetch data using API service
  const fetchFleets = async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    try {
      const res = await getFleetList(page, LIMIT);

      if (res.length > 0) {
        setData(prev => [...prev, ...res]);
        setPage(prev => prev + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFleets();
  }, []);

  const renderItem = useCallback(
    ({ item }) => (
      <FleetCard
       fleetName={`${item.name.first} ${item.name.last}`}
        fleetDetails={`Located in ${item.location.country}`}
        // item={{
        //   name:,
        //   country: item.location.country,
        //   avatar: item.picture.large,
        // }}
      />
    ),
    []
  );

  return (
    <View style={styles.container}>
      
      <Header />
  <View style={{padding: 12}}>

      <FlatList
        data={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        
        // PERFORMANCE
        initialNumToRender={10}
        maxToRenderPerBatch={10}
        windowSize={5}
        removeClippedSubviews
        onEndReached={fetchFleets}
        onEndReachedThreshold={0.5}

        ItemSeparatorComponent={() => <View style={{ height: 12 }} />}

        ListHeaderComponent={
          <View style={styles.listHeader}>
            <HeaderTitle
              title="Fleet Management"
              description="View and manage all your GPU rigs"
            />
            <CustomInput
              placeholder="Search rigs by name, GPU model"
              leftIcon={SearchSvg}
            />
            <HeaderButtons />
          </View>
        }

        ListFooterComponent={
          loading ? (
            <ActivityIndicator size="small" color={colors.primary} />
          ) : (
            <View style={{ height: 30 }} />
          )
        }
      />
</View>
    </View>
  );
};

export default FleetManagement;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  listHeader: {
    gap: 10,
    marginTop: 10,
  },
});
