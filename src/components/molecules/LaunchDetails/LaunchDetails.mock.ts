type LaunchDetailsProps = {
  flightNumber: number;
  missionName: string;
  launchYear: number;
  details: string;
};

export const launchDetailsMock: LaunchDetailsProps = {
  flightNumber: 6,
  missionName: 'DSCVR',
  launchYear: 2015,
  details:
    "First launch under USAF's OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target.",
};
