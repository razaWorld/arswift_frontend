import React from 'react';
import Svg, { Path,Rect,G,Defs,ClipPath,Circle } from 'react-native-svg';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '../../theme';
export const TripleDotSvg = ({ size = 24, stroke = '#FAFAFA' }) => {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      <Circle cx="12" cy="5.5" r="1.75" fill={stroke} />
      <Circle cx="12" cy="12" r="1.75" fill={stroke} />
      <Circle cx="12" cy="18.5" r="1.75" fill={stroke} />
    </Svg>
  );
};

export const VerticalLineSvg = ({ height = 32, stroke = '#262626', width = 1 }) => {
  return (
    <View
      style={{
        width,
        height,
        backgroundColor: stroke,
      }}
    />
  );
};
export const GridIconSvg = ({ width = 16, height = 16, stroke = "#FAFAFA" }) => (
  <Svg
    width={width}
    height={height}
    viewBox="0 0 16 16"
    fill="none"
  >
    <Path
      d="M12.6667 2H3.33333C2.59695 2 2 2.59695 2 3.33333V12.6667C2 13.403 2.59695 14 3.33333 14H12.6667C13.403 14 14 13.403 14 12.6667V3.33333C14 2.59695 13.403 2 12.6667 2Z"
      stroke={stroke}
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M6 2V14"
      stroke={stroke}
      strokeWidth={1.33333}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export const UserSvg = ({
  width = 20,
  height = 20,
  stroke = colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M15.8333 17.5V15.8333C15.8333 14.9493 15.4821 14.1014 14.857 13.4763C14.2319 12.8512 13.384 12.5 12.5 12.5H7.49999C6.61593 12.5 5.76809 12.8512 5.14297 13.4763C4.51785 14.1014 4.16666 14.9493 4.16666 15.8333V17.5"
        stroke={stroke}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.99999 9.16667C11.8409 9.16667 13.3333 7.67428 13.3333 5.83333C13.3333 3.99238 11.8409 2.5 9.99999 2.5C8.15904 2.5 6.66666 3.99238 6.66666 5.83333C6.66666 7.67428 8.15904 9.16667 9.99999 9.16667Z"
        stroke={stroke}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const SearchSvg = ({
  width = 16,
  height = 16,
  stroke = colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M14 14L11.1067 11.1067"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.33333 12.6667C10.2789 12.6667 12.6667 10.2789 12.6667 7.33333C12.6667 4.38781 10.2789 2 7.33333 2C4.38781 2 2 4.38781 2 7.33333C2 10.2789 4.38781 12.6667 7.33333 12.6667Z"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const NotificationSvg = ({
  width = 20,
  height = 20,
  stroke =colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M8.55667 17.5C8.70296 17.7533 8.91335 17.9637 9.16671 18.11C9.42006 18.2563 9.70746 18.3333 10 18.3333C10.2926 18.3333 10.5799 18.2563 10.8333 18.11C11.0867 17.9637 11.2971 17.7533 11.4433 17.5"
        stroke={stroke}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2.71833 12.7717C2.60947 12.891 2.53763 13.0394 2.51155 13.1988C2.48547 13.3582 2.50627 13.5217 2.57142 13.6695C2.63658 13.8173 2.74328 13.943 2.87855 14.0312C3.01381 14.1195 3.17182 14.1665 3.33333 14.1667H16.6667C16.8282 14.1667 16.9862 14.1199 17.1216 14.0318C17.2569 13.9437 17.3637 13.8181 17.4291 13.6704C17.4944 13.5227 17.5154 13.3592 17.4895 13.1998C17.4637 13.0404 17.392 12.8919 17.2833 12.7725C16.175 11.63 15 10.4158 15 6.66666C15 5.34058 14.4732 4.06881 13.5355 3.13113C12.5979 2.19345 11.3261 1.66666 10 1.66666C8.67392 1.66666 7.40215 2.19345 6.46447 3.13113C5.52679 4.06881 5 5.34058 5 6.66666C5 10.4158 3.82417 11.63 2.71833 12.7717Z"
        stroke={stroke}
        strokeWidth={1.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const AddIconSvg = ({
  width = 16,
  height = 16,
  stroke = colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M3.33333 8H12.6667"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 3.33334V12.6667"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const LoopSwitchIconSvg = ({
  width = 16,
  height = 16,
  stroke =colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M11.3333 1.33334L14 4.00001L11.3333 6.66668"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M2 7.33333V6.66667C2 5.95942 2.28095 5.28115 2.78105 4.78105C3.28115 4.28095 3.95942 4 4.66667 4H14"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.66667 14.6667L2 12L4.66667 9.33334"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M14 8.66666V9.33332C14 10.0406 13.719 10.7188 13.219 11.2189C12.7189 11.719 12.0406 12 11.3333 12H2"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const RigsIconSvg = ({
  width = 16,
  height = 16,
  stroke = colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M14.6667 8H1.33334"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3.63334 3.40666L1.33334 7.99999V12C1.33334 12.3536 1.47382 12.6928 1.72387 12.9428C1.97392 13.1928 2.31305 13.3333 2.66668 13.3333H13.3333C13.687 13.3333 14.0261 13.1928 14.2762 12.9428C14.5262 12.6928 14.6667 12.3536 14.6667 12V7.99999L12.3667 3.40666C12.2563 3.18451 12.0861 2.99757 11.8753 2.86684C11.6645 2.73612 11.4214 2.66679 11.1733 2.66666H4.82668C4.57862 2.66679 4.33552 2.73612 4.12471 2.86684C3.91389 2.99757 3.74373 3.18451 3.63334 3.40666Z"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 10.6667H4.00667"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6.66666 10.6667H6.67332"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const PriceSvg = ({
  width = 16,
  height = 16,
  stroke = colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M8 1.33331V14.6666"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M11.3333 3.33331H6.33333C5.71449 3.33331 5.121 3.57915 4.68342 4.01673C4.24583 4.45432 4 5.04781 4 5.66665C4 6.28548 4.24583 6.87898 4.68342 7.31656C5.121 7.75415 5.71449 7.99998 6.33333 7.99998H9.66667C10.2855 7.99998 10.879 8.24581 11.3166 8.6834C11.7542 9.12098 12 9.71447 12 10.3333C12 10.9522 11.7542 11.5456 11.3166 11.9832C10.879 12.4208 10.2855 12.6666 9.66667 12.6666H4"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ThunderSvg = ({
  width = 16,
  height = 16,
  stroke = colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M9.33333 1.33331L3.33333 9.33331H7.33333L6.66667 14.6666L12.6667 6.66665H8.66667L9.33333 1.33331Z"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const CancelSvg = ({
  width = 12,
  height = 12,
  stroke = colors.svg,
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M9 3L3 9"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M3 3L9 9"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const WarningSvg = ({
  width = 16,
  height = 16,
  stroke = colors.warning, // uses theme warning color
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8 1.33337C4.3181 1.33337 1.33333 4.31814 1.33333 8.00004C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 5.33337V8.00004"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M8 10.6666H8.00667"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const RoundTickSvg = ({
  width = 16,
  height = 16,
  stroke = colors.success, // uses theme success color
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M14.534 6.66666C14.8385 8.16086 14.6215 9.71428 13.9192 11.0679C13.217 12.4214 12.0719 13.4934 10.675 14.1049C9.27809 14.7164 7.71375 14.8305 6.24287 14.4282C4.77198 14.026 3.48346 13.1316 2.59219 11.8943C1.70091 10.657 1.26075 9.15148 1.34511 7.62892C1.42947 6.10635 2.03325 4.65872 3.05577 3.52744C4.07828 2.39616 5.45772 1.64961 6.96405 1.4123C8.47037 1.17498 10.0125 1.46123 11.3333 2.22333"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 7.33329L8 9.33329L14.6667 2.66663"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const RoundCrossSvg = ({
  width = 16,
  height = 16,
  stroke = colors.error, // uses theme error color
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M8 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00004C14.6667 4.31814 11.6819 1.33337 8 1.33337C4.3181 1.33337 1.33333 4.31814 1.33333 8.00004C1.33333 11.6819 4.3181 14.6667 8 14.6667Z"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10 6L6 10"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 6L10 10"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const ForwardNextSvg = ({
  width = 12,
  height = 12,
  stroke = colors.svg, // use theme color
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M2.5 6H9.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 2.5L9.5 6L6 9.5"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const RoundDotSvg = ({
  width = 30,
  height = 30,
  fill = colors.secondary, // default fill color
  stroke = colors.primary, // default stroke color
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 30 30"
      fill="none"
    >
      <Path
        d="M14.6667 27.9999C22.0305 27.9999 28 22.0304 28 14.6666C28 7.30279 22.0305 1.33325 14.6667 1.33325C7.30287 1.33325 1.33333 7.30279 1.33333 14.6666C1.33333 22.0304 7.30287 27.9999 14.6667 27.9999Z"
        fill={fill}
        stroke={stroke}
        strokeWidth={2.66667}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const PowerSvg = ({
  width = 12,
  height = 12,
  stroke = colors.textSecondary, // default stroke color
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 12"
      fill="none"
    >
      <Path
        d="M6 1V6"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.2 3.30005C9.82832 3.9286 10.2565 4.72913 10.4304 5.60069C10.6044 6.47225 10.5163 7.37579 10.1774 8.19739C9.83853 9.01898 9.26394 9.72183 8.52611 10.2173C7.78829 10.7127 6.92027 10.9786 6.03153 10.9814C5.14279 10.9842 4.27313 10.7238 3.53221 10.2329C2.7913 9.7421 2.21231 9.04287 1.86827 8.22342C1.52424 7.40396 1.43055 6.50098 1.59904 5.62835C1.76752 4.75572 2.19063 3.95253 2.815 3.32005"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const FilterSvg = ({
  width = 15,
  height = 14,
  stroke = colors.textSecondary, // default stroke color
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 14"
      fill="none"
    >
      <Path
        d="M14 0.666656H0.666687L6.00002 6.97332V11.3333L8.66669 12.6667V6.97332L14 0.666656Z"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const DownloadSvg = ({
  width = 16,
  height = 16,
  stroke = colors.textSecondary, // default stroke color
}) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M14 10V12.6667C14 13.0203 13.8595 13.3594 13.6095 13.6095C13.3594 13.8595 13.0203 14 12.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V10M4.66667 6.66667L8 10M8 10L11.3333 6.66667M8 10V2"
        stroke={stroke}
        strokeWidth={1.33333}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};

export const GreenDotSvg = ({ width = 10, height = 10, fill = '#01C951' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 10"
      fill="none"
    >
      <Rect width="10" height="10" rx="5" fill={fill} />
    </Svg>
  );
};
export const ZigzagArrowUpSvg = ({ width = 15, height = 9, fill = '#01C951' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M14.3473 0.446423C14.2742 0.270482 14.1344 0.130669 13.9585 0.0576029C13.8719 0.0207075 13.779 0.00113765 13.6849 0H10.0847C9.89372 0 9.71058 0.0758609 9.57555 0.210894C9.44051 0.345927 9.36465 0.529071 9.36465 0.720037C9.36465 0.911002 9.44051 1.09415 9.57555 1.22918C9.71058 1.36421 9.89372 1.44007 10.0847 1.44007H11.9496L7.92458 5.46508L5.55566 3.08896C5.48872 3.02147 5.40908 2.9679 5.32134 2.93135C5.2336 2.89479 5.13948 2.87597 5.04443 2.87597C4.94938 2.87597 4.85527 2.89479 4.76752 2.93135C4.67978 2.9679 4.60014 3.02147 4.53321 3.08896L0.212986 7.40918C0.145498 7.47611 0.0919311 7.55575 0.0553758 7.64349C0.0188205 7.73124 0 7.82535 0 7.9204C0 8.01546 0.0188205 8.10957 0.0553758 8.19731C0.0919311 8.28506 0.145498 8.36469 0.212986 8.43163C0.279922 8.49912 0.359559 8.55268 0.447302 8.58924C0.535046 8.62579 0.629158 8.64461 0.724212 8.64461C0.819265 8.64461 0.913378 8.62579 1.00112 8.58924C1.08886 8.55268 1.1685 8.49912 1.23544 8.43163L5.04443 4.61543L7.41335 6.99156C7.48029 7.05904 7.55993 7.11261 7.64767 7.14917C7.73541 7.18572 7.82952 7.20454 7.92458 7.20454C8.01963 7.20454 8.11374 7.18572 8.20149 7.14917C8.28923 7.11261 8.36887 7.05904 8.4358 6.99156L12.9648 2.45532V4.32022C12.9648 4.51119 13.0407 4.69433 13.1757 4.82936C13.3108 4.9644 13.4939 5.04026 13.6849 5.04026C13.8758 5.04026 14.059 4.9644 14.194 4.82936C14.329 4.69433 14.4049 4.51119 14.4049 4.32022V0.720037C14.4038 0.625944 14.3842 0.532987 14.3473 0.446423Z"
        fill={fill}
      />
    </Svg>
  );
};
export const ClockSvg = ({ width = 13, height = 13, stroke = '#A1A1A1' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 13 13"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <Path
        d="M6.05005 2.74999V6.04999L8.25005 7.14999M11.55 6.04999C11.55 9.08755 9.08762 11.55 6.05005 11.55C3.01248 11.55 0.550049 9.08755 0.550049 6.04999C0.550049 3.01242 3.01248 0.549988 6.05005 0.549988C9.08762 0.549988 11.55 3.01242 11.55 6.04999Z"
        stroke={stroke}
        strokeWidth={1.1}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const LoopSSvg = ({ width = 16, height = 16, stroke = '#FAFAFA' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <G clipPath="url(#clip0)">
        <Path
          d="M0.666748 2.66667V6.66667M0.666748 6.66667H4.66675M0.666748 6.66667L3.76008 3.76001C4.68069 2.84095 5.87505 2.24599 7.1632 2.06475C8.45135 1.88352 9.76351 2.12583 10.902 2.75518C12.0404 3.38454 12.9435 4.36684 13.4752 5.55407C14.0068 6.74131 14.1382 8.06917 13.8496 9.33758C13.5609 10.606 12.8679 11.7462 11.8748 12.5865C10.8818 13.4268 9.64258 13.9216 8.34389 13.9963C7.0452 14.0711 5.7574 13.7217 4.67452 13.0009C3.59164 12.2801 2.77234 11.2269 2.34008 10"
          stroke={stroke}
          strokeWidth={1.6}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </G>
      <Defs>
        <ClipPath id="clip0">
          <Rect width="16" height="16" fill="white" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};
export const AddMemberSvg = ({ width = 14, height = 14, fill = '#171717' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 14 14"
      fill="none"
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.66667 8C9.55072 8 10.3986 8.35119 11.0237 8.97631C11.6488 9.60143 12 10.4493 12 11.3333V12.6667C12 12.8435 11.9298 13.013 11.8047 13.1381C11.6797 13.2631 11.5101 13.3333 11.3333 13.3333C11.1565 13.3333 10.987 13.2631 10.8619 13.1381C10.7369 13.013 10.6667 12.8435 10.6667 12.6667V11.3333C10.6667 10.8029 10.456 10.2942 10.0809 9.91912C9.70581 9.54405 9.1971 9.33333 8.66667 9.33333H3.33333C2.8029 9.33333 2.29419 9.54405 1.91912 9.91912C1.54405 10.2942 1.33333 10.8029 1.33333 11.3333V12.6667C1.33333 12.8435 1.2631 13.013 1.13807 13.1381C1.01305 13.2631 0.843478 13.3333 0.666667 13.3333C0.489856 13.3333 0.320286 13.2631 0.195262 13.1381C0.0702379 13.013 0 12.8435 0 12.6667V11.3333C0 10.4493 0.351189 9.60143 0.976311 8.97631C1.60143 8.35119 2.44928 8 3.33333 8H8.66667ZM11.3333 4C11.5101 4 11.6797 4.07024 11.8047 4.19526C11.9298 4.32029 12 4.48986 12 4.66667V5.33333H12.6667C12.8435 5.33333 13.013 5.40357 13.1381 5.5286C13.2631 5.65362 13.3333 5.82319 13.3333 6C13.3333 6.17681 13.2631 6.34638 13.1381 6.4714C13.013 6.59643 12.8435 6.66667 12.6667 6.66667H12V7.33333C12 7.51014 11.9298 7.67971 11.8047 7.80474C11.6797 7.92976 11.5101 8 11.3333 8C11.1565 8 10.987 7.92976 10.8619 7.80474C10.7369 7.67971 10.6667 7.51014 10.6667 7.33333V6.66667H10C9.82319 6.66667 9.65362 6.59643 9.52859 6.4714C9.40357 6.34638 9.33333 6.17681 9.33333 6C9.33333 5.82319 9.40357 5.65362 9.52859 5.5286C9.65362 5.40357 9.82319 5.33333 10 5.33333H10.6667V4.66667C10.6667 4.48986 10.7369 4.32029 10.8619 4.19526C10.987 4.07024 11.1565 4 11.3333 4ZM6 0C6.88405 0 7.7319 0.351189 8.35702 0.976311C8.98214 1.60143 9.33333 2.44928 9.33333 3.33333C9.33333 4.21739 8.98214 5.06523 8.35702 5.69036C7.7319 6.31548 6.88405 6.66667 6 6.66667C5.11594 6.66667 4.2681 6.31548 3.64298 5.69036C3.01786 5.06523 2.66667 4.21739 2.66667 3.33333C2.66667 2.44928 3.01786 1.60143 3.64298 0.976311C4.2681 0.351189 5.11594 0 6 0ZM6 1.33333C5.73736 1.33333 5.47728 1.38506 5.23463 1.48557C4.99198 1.58608 4.7715 1.7334 4.58579 1.91912C4.40007 2.10484 4.25275 2.32532 4.15224 2.56797C4.05173 2.81062 4 3.07069 4 3.33333C4 3.59598 4.05173 3.85605 4.15224 4.0987C4.25275 4.34135 4.40007 4.56183 4.58579 4.74755C4.7715 4.93326 4.99198 5.08058 5.23463 5.18109C5.47728 5.2816 5.73736 5.33333 6 5.33333C6.53043 5.33333 7.03914 5.12262 7.41421 4.74755C7.78929 4.37247 8 3.86377 8 3.33333C8 2.8029 7.78929 2.29419 7.41421 1.91912C7.03914 1.54405 6.53043 1.33333 6 1.33333Z"
        fill={fill}
      />
    </Svg>
  );
};
export const PaymentMethodSvg = ({ width = 19, height = 15, stroke = colors.background }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 19 15"
      fill="none"
    >
      <Path
        d="M17.4167 7.41667C17.4167 4.27417 17.4167 2.7025 16.44 1.72667C15.4633 0.750833 13.8925 0.75 10.75 0.75H7.41667C4.27417 0.75 2.7025 0.75 1.72667 1.72667C0.750833 2.70333 0.75 4.27417 0.75 7.41667C0.75 10.5592 0.75 12.1308 1.72667 13.1067C2.70333 14.0825 4.27417 14.0833 7.41667 14.0833H10.75C13.8925 14.0833 15.4642 14.0833 16.44 13.1067C16.985 12.5625 17.2258 11.8333 17.3317 10.75"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
      />
      <Path d="M7.41667 10.75H4.08333" stroke={stroke} strokeWidth={1.5} strokeLinecap="round"/>
      <Path d="M10.75 10.75H9.5" stroke={stroke} strokeWidth={1.5} strokeLinecap="round"/>
      <Path d="M0.75 5.75H4.91667" stroke={stroke} strokeWidth={1.5} strokeLinecap="round"/>
      <Path d="M17.4167 5.75H8.25" stroke={stroke} strokeWidth={1.5} strokeLinecap="round"/>
    </Svg>
  );
};

export const SaveGuardSvg = ({ width = 16, height = 16, fill = 'black' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M7.99992 1.99994L8.19659 1.53994C8.13443 1.51334 8.06752 1.49963 7.99992 1.49963C7.93231 1.49963 7.86541 1.51334 7.80325 1.53994L7.99992 1.99994ZM7.99992 13.9999L7.75192 14.4339C7.82745 14.4771 7.91293 14.4998 7.99992 14.4998C8.0869 14.4998 8.17239 14.4771 8.24792 14.4339L7.99992 13.9999ZM7.80259 1.5406L3.54125 3.3666L3.93325 4.2866L8.19592 2.45994L7.80259 1.5406ZM2.83325 4.43927V9.0126H3.83325V4.43927H2.83325ZM5.10059 12.9193L7.75192 14.4339L8.24792 13.5659L5.59659 12.0506L5.10059 12.9193ZM8.24792 14.4339L10.8993 12.9193L10.4033 12.0506L7.75192 13.5659L8.24792 14.4339ZM13.1666 9.01194V4.43994H12.1666V9.01327L13.1666 9.01194ZM12.4599 3.36727L8.19659 1.5406L7.80325 2.45927L12.0659 4.2866L12.4599 3.36727ZM13.1666 4.43994C13.1666 3.97327 12.8886 3.55127 12.4599 3.36727L12.0659 4.2866C12.0959 4.29951 12.1213 4.32092 12.1392 4.34818C12.1571 4.37543 12.1666 4.40733 12.1666 4.43994H13.1666ZM10.8993 12.9193C11.588 12.5257 12.1604 11.9571 12.5586 11.271C12.9568 10.585 13.1665 9.80584 13.1666 9.0126H12.1666C12.1665 9.62946 12.0033 10.2353 11.6936 10.7688C11.384 11.3023 10.9388 11.7445 10.4033 12.0506L10.8993 12.9193ZM2.83325 9.0126C2.83332 9.80584 3.04307 10.585 3.44125 11.271C3.83942 11.9571 4.41187 12.5257 5.10059 12.9193L5.59659 12.0506C5.06092 11.7445 4.6157 11.3022 4.30603 10.7685C3.99637 10.2349 3.83327 9.62891 3.83325 9.01194L2.83325 9.0126ZM3.53992 3.3666C3.33019 3.45659 3.15146 3.6061 3.02585 3.79665C2.90025 3.98719 2.83328 4.21105 2.83325 4.43927H3.83325C3.83325 4.3726 3.87325 4.31194 3.93459 4.28527L3.53992 3.3666Z"
        fill={fill}
      />
    </Svg>
  );
};
export const KeySvg = ({ width = 20, height = 20, stroke = '#1295FF' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 20 20"
      fill="none"
    >
      <Path
        d="M13.112 6.815L14.432 8.135C15.427 9.13 15.777 7.295 17.166 7.065C17.632 6.987 18.043 6.829 18.219 6.313C18.375 5.857 18.198 5.428 17.645 4.875L16.25 3.481M8.75 10.75L18.75 0.75M5.25 18.75C5.84095 18.75 6.42611 18.6336 6.97208 18.4075C7.51804 18.1813 8.01412 17.8498 8.43198 17.432C8.84984 17.0141 9.18131 16.518 9.40746 15.9721C9.6336 15.4261 9.75 14.8409 9.75 14.25C9.75 13.6591 9.6336 13.0739 9.40746 12.5279C9.18131 11.982 8.84984 11.4859 8.43198 11.068C8.01412 10.6502 7.51804 10.3187 6.97208 10.0925C6.42611 9.8664 5.84095 9.75 5.25 9.75C4.05653 9.75 2.91193 10.2241 2.06802 11.068C1.22411 11.9119 0.75 13.0565 0.75 14.25C0.75 15.4435 1.22411 16.5881 2.06802 17.432C2.91193 18.2759 4.05653 18.75 5.25 18.75Z"
        stroke={stroke}
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const EyeSvg = ({ width = 16, height = 16, fill = '#FAFAFA' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M15.47 7.83C14.882 6.30882 13.861 4.99331 12.5334 4.04604C11.2058 3.09878 9.62977 2.56129 8.00003 2.5C6.37029 2.56129 4.79423 3.09878 3.46663 4.04604C2.13904 4.99331 1.11811 6.30882 0.530031 7.83C0.490315 7.93985 0.490315 8.06015 0.530031 8.17C1.11811 9.69118 2.13904 11.0067 3.46663 11.954C4.79423 12.9012 6.37029 13.4387 8.00003 13.5C9.62977 13.4387 11.2058 12.9012 12.5334 11.954C13.861 11.0067 14.882 9.69118 15.47 8.17C15.5097 8.06015 15.5097 7.93985 15.47 7.83ZM8.00003 12.5C5.35003 12.5 2.55003 10.535 1.53503 8C2.55003 5.465 5.35003 3.5 8.00003 3.5C10.65 3.5 13.45 5.465 14.465 8C13.45 10.535 10.65 12.5 8.00003 12.5Z"
        fill={fill}
      />
      <Path
        d="M8 5C7.40666 5 6.82664 5.17595 6.33329 5.50559C5.83994 5.83524 5.45543 6.30377 5.22836 6.85195C5.0013 7.40013 4.94189 8.00333 5.05765 8.58527C5.1734 9.16721 5.45912 9.70176 5.87868 10.1213C6.29824 10.5409 6.83279 10.8266 7.41473 10.9424C7.99667 11.0581 8.59987 10.9987 9.14805 10.7716C9.69623 10.5446 10.1648 10.1601 10.4944 9.66671C10.8241 9.17336 11 8.59334 11 8C11 7.20435 10.6839 6.44129 10.1213 5.87868C9.55871 5.31607 8.79565 5 8 5ZM8 10C7.60444 10 7.21776 9.8827 6.88886 9.66294C6.55996 9.44318 6.30362 9.13082 6.15224 8.76537C6.00087 8.39991 5.96126 7.99778 6.03843 7.60982C6.1156 7.22186 6.30608 6.86549 6.58579 6.58579C6.86549 6.30608 7.22186 6.1156 7.60982 6.03843C7.99778 5.96126 8.39992 6.00087 8.76537 6.15224C9.13082 6.30362 9.44318 6.55996 9.66294 6.88886C9.8827 7.21776 10 7.60444 10 8C10 8.53043 9.78929 9.03914 9.41421 9.41421C9.03914 9.78929 8.53043 10 8 10Z"
        fill={fill}
      />
    </Svg>
  );
};

export const CopySvg = ({ width = 16, height = 16, stroke = '#FAFAFA' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
    >
      <Path
        d="M12.9331 13.3335H6.39976C6.29367 13.3335 6.19193 13.2914 6.11691 13.2164C6.0419 13.1413 5.99976 13.0396 5.99976 12.9335V6.40018C5.99976 6.2941 6.0419 6.19235 6.11691 6.11734C6.19193 6.04233 6.29367 6.00018 6.39976 6.00018H12.9331C13.0392 6.00018 13.1409 6.04233 13.2159 6.11734C13.2909 6.19235 13.3331 6.2941 13.3331 6.40018V12.9335C13.3331 13.0396 13.2909 13.1413 13.2159 13.2164C13.1409 13.2914 13.0392 13.3335 12.9331 13.3335Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M9.99984 6.0002V3.06687C9.99984 2.96078 9.9577 2.85904 9.88268 2.78403C9.80767 2.70901 9.70592 2.66687 9.59984 2.66687H3.0665C2.96042 2.66687 2.85868 2.70901 2.78366 2.78403C2.70865 2.85904 2.6665 2.96078 2.6665 3.06687V9.6002C2.6665 9.70629 2.70865 9.80803 2.78366 9.88305C2.85868 9.95806 2.96042 10.0002 3.0665 10.0002H5.99984"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const TextFileSvg = ({ width = 12, height = 15, stroke = '#A1A1A1' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 12 15"
      fill="none"
    >
      <Path
        d="M3.16667 6.50018H8.5M3.16667 8.50018H8.5M3.16667 10.5002H5.94667M0.5 9.83352V4.50018C0.5 2.61485 0.5 1.67152 1.086 1.08618C1.67133 0.500183 2.61467 0.500183 4.5 0.500183H7.28133C7.55333 0.500183 7.69 0.500183 7.81267 0.55085C7.93467 0.601516 8.03133 0.697516 8.224 0.89085L10.776 3.44285C10.9693 3.63618 11.0653 3.73218 11.116 3.85485C11.1667 3.97685 11.1667 4.11352 11.1667 4.38552V9.83352C11.1667 11.7188 11.1667 12.6622 10.5807 13.2475C9.99533 13.8335 9.052 13.8335 7.16667 13.8335H4.5C2.61467 13.8335 1.67133 13.8335 1.086 13.2475C0.5 12.6622 0.5 11.7188 0.5 9.83352Z"
        stroke={stroke}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};
export const DropdownIconSvg = ({ width = 10, height = 6, stroke = '#A1A1A1' }) => {
  return (
    <Svg
      width={width}
      height={height}
      viewBox="0 0 10 6"
      fill="none"
    >
      <Path
        d="M0.799805 0.800049L4.7998 4.80005L8.7998 0.800049"
        stroke={stroke}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
};














