import { shallow, mount } from 'enzyme';
import WeightTimeline from './WeightTimeline';

describe('WeightTimeline component', () => {
  let weightTimelineWrapper;
  beforeEach(() => {
    weightTimelineWrapper = shallow(<WeightTimeline />)
  });

  it('should render an h2 title', () => {
    const componentTitle = weightTimelineWrapper.find('h2');
    expect(componentTitle).toHaveLength(1);
  });

  it('should have button to add and edit data with specific title', () => {
    const addBtn = weightTimelineWrapper.find('button.btn.btn--primary.btn--lg');
    expect(addBtn.at(0).text()).toBe('Add or edit weight');
  });
  
  it('should render a line chart', () => {
    const weightTimelineWrapper = mount(<WeightTimeline />)
    const lienChartWrapper = weightTimelineWrapper.find('.line-chart');
    expect(lienChartWrapper).toHaveLength(1);
  });
  
  it('should show a popup box when add btn is clicked', () => {
    const weightTimelineWrapper = mount(<WeightTimeline />)
    const addBtn = weightTimelineWrapper.find('button.btn.btn--primary.btn--lg');
    addBtn.simulate('click');
    const popupBoxTitle = weightTimelineWrapper.find('h3');
    expect(popupBoxTitle.at(0).text()).toBe('Add or edit your weight data');
  });

  it('should dismiss popup when cancel btn is clicked', () => {
    const weightTimelineWrapper = mount(<WeightTimeline />)
    const addBtn = weightTimelineWrapper.find('.btn.btn--primary.btn--lg');
    addBtn.simulate('click');

    const cancelBtn = weightTimelineWrapper.find('.btn.btn--block.btn--secondary');
    cancelBtn.simulate('click');
    expect(weightTimelineWrapper.find('h3')).toHaveLength(0);
  });
})
