type LaunchTemplateDataMockType = {
  flightNumber: number;
  missionName: string;
  launchYear: number;
  details: string;
  images: string[];
};

export const launchTemplateDataMock: LaunchTemplateDataMockType = {
  flightNumber: 20,
  missionName: 'DSCOVR',
  launchYear: 2015,
  details:
    "First launch under USAF's OSP 3 launch contract. First SpaceX launch to put a satellite to an orbit with an orbital altitude many times the distance to the Moon: Sun-Earth libration point L1. The first stage made a test flight descent to an over-ocean landing within 10 m (33 ft) of its intended target.",
  images: [
    'https://farm9.staticflickr.com/8619/16511407538_9a25c5d8c6_o.jpg',
    'https://farm9.staticflickr.com/8665/16697946612_1284e952b0_o.jpg',
    'https://farm9.staticflickr.com/8570/16698990475_16524a93de_o.jpg',
    'https://farm9.staticflickr.com/8681/16512864259_e849e496b1_o.jpg',
    'https://farm9.staticflickr.com/8637/16079045013_1f0fab9b54_o.jpg',
    'https://farm9.staticflickr.com/8601/16512864369_2bb896c344_o.jpg',
    'https://farm9.staticflickr.com/8646/16697693861_a038331e0a_o.jpg',
    'https://farm9.staticflickr.com/8680/16511407248_093635a243_o.jpg',
    'https://farm9.staticflickr.com/8654/16511594820_451f194d53_o.jpg',
    'https://farm9.staticflickr.com/8603/16673054016_472fb42a20_o.jpg',
  ],
};
