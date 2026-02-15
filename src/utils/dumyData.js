 import { RigsIconSvg,PriceSvg, ThunderSvg,WarningSvg,RoundCrossSvg,RoundTickSvg } from "../assets/svg/svg";
 export const dashboardData = [
    {
      id: '1',
      title: 'Total Rigs',
      count: 6,
      onlineCount: 5,
      offlineCount: 1,
      Icon: RigsIconSvg,
    },
    {
      id: '2',
      title: 'Est. Daily Profit',
      count: '$847.32',
      onlineCount: "+12.5% vs yesterday",
      // offlineCount: 1,
      Icon: PriceSvg,
    },
    {
      id: '3',
      title: 'Switcher Alpha',
      count: "+23.4%",
      // onlineCount: 5,
      offlineCount: "vs static allocation",
      Icon: ThunderSvg,
    },
    {
      id: '4',
      title: 'Avg.Profit/Hour',
      count: "$35.31 ",
      // onlineCount: 5,
      offlineCount: "accros all active rigs",
      Icon: PriceSvg,
    },
  ];

  export const dummyAlerts = [
  {
    id: '1',
    title: 'GPU Overheating',
    description: 'Temperature exceeded safe threshold on Rig #12',
    time: '1 hour ago',
    IconLeft: RoundCrossSvg,
    
  },
  {
    id: '2',
    title: 'Server Offline',
    description: 'Mining server stopped responding unexpectedly',
    time: '2 hours ago',
    IconLeft: WarningSvg,
  },
  {
    id: '3',
    title: 'Task Completed',
    description: 'Scheduled maintenance task completed successfully',
    time: '3 hours ago',
    IconLeft: RoundTickSvg,
  },
 
];

export const dummyAlerts1 = [
  {
    id: '1',
    title: 'GPU Overheating',
    description: 'Temperature exceeded safe threshold on Rig #12',
    time: '1 hour ago',
    IconLeft: RoundCrossSvg,
    dollarHours: '$2.5/hr',
  },
  {
    id: '2',
    title: 'Server Offline',
    description: 'Mining server stopped responding unexpectedly',
    time: '2 hours ago',
    IconLeft: WarningSvg,
    dollarHours: '$0.0/hr',
  },
 
  
];

