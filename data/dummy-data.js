import Event from '../models/Event';
import Magazine from '../models/Magazine';

const EVENTS = [
  new Event(1, 'Gnana Muham 1', 'Sri Bagavath', 'Bhavan', new Date()),
  new Event(
    2,
    'Gnana Muham 2',
    'VAP Saravanan',
    'Bhavan',
    new Date('2020-04-30')
  ),
  new Event(
    3,
    'Gnana Muham 3',
    'KS Jeevamani',
    'Bhavan',
    new Date('2020-01-01')
  ),
  new Event(4, 'Gnana Muham 4', 'Sri Bagavath', 'Zoom', new Date('2020-06-09')),
  new Event(5, 'Gnana Muham 5', 'VAP and KS', 'Zoom', new Date('2020-06-10')),
];

const MAGAZINES = [
  new Magazine(1, new Date('2019-01'), 'some url here'),
  new Magazine(2, new Date('2019-02'), 'some url here'),
  new Magazine(3, new Date('2019-03'), 'some url here'),
  new Magazine(4, new Date('2019-04'), 'some url here'),
  new Magazine(5, new Date('2019-05'), 'some url here'),
  new Magazine(6, new Date('2019-06'), 'some url here'),
  new Magazine(7, new Date('2019-07'), 'some url here'),
  new Magazine(8, new Date('2019-08'), 'some url here'),
  new Magazine(9, new Date('2019-09'), 'some url here'),
  new Magazine(10, new Date('2019-10'), 'some url here'),
  new Magazine(11, new Date('2019-11'), 'some url here'),
  new Magazine(12, new Date('2019-12'), 'some url here'),

  new Magazine(13, new Date('2018-01'), 'some url here'),
  new Magazine(14, new Date('2018-02'), 'some url here'),
  new Magazine(15, new Date('2018-03'), 'some url here'),
  new Magazine(16, new Date('2018-04'), 'some url here'),
  new Magazine(17, new Date('2018-05'), 'some url here'),
  new Magazine(18, new Date('2018-06'), 'some url here'),
  new Magazine(19, new Date('2018-07'), 'some url here'),
  new Magazine(20, new Date('2018-08'), 'some url here'),
  new Magazine(21, new Date('2018-09'), 'some url here'),
  new Magazine(22, new Date('2018-10'), 'some url here'),
  new Magazine(23, new Date('2018-11'), 'some url here'),
  new Magazine(24, new Date('2018-12'), 'some url here'),

  new Magazine(25, new Date('2017-01'), 'some url here'),
  new Magazine(26, new Date('2017-02'), 'some url here'),
  new Magazine(27, new Date('2017-03'), 'some url here'),
  new Magazine(28, new Date('2017-04'), 'some url here'),
  new Magazine(29, new Date('2017-05'), 'some url here'),
  new Magazine(30, new Date('2017-06'), 'some url here'),
  new Magazine(31, new Date('2017-07'), 'some url here'),
  new Magazine(32, new Date('2017-08'), 'some url here'),
  new Magazine(33, new Date('2017-09'), 'some url here'),
  new Magazine(34, new Date('2017-10'), 'some url here'),
  new Magazine(35, new Date('2017-11'), 'some url here'),
  new Magazine(36, new Date('2017-12'), 'some url here'),
];

export { EVENTS, MAGAZINES };
