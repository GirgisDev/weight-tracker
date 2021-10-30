import { shallow, mount } from 'enzyme';
import AddEditWeight from './AddEditWeight';

describe('AddEditWeight component', () => {
  let addEditWeightWrapper;
  beforeEach(() => {
    addEditWeightWrapper = shallow(<AddEditWeight />)
  });

  it('should have empty current-data obj by default', () => {
    const currentData = {};
    const addEditWeightWrapper = mount(<AddEditWeight currentData={currentData} />)
    const currentDataProp = Object.keys(addEditWeightWrapper.props().currentData)?.length;
    expect(currentDataProp).toBe(0);
  });

  it('should have one date input field', () => {
    const dateInputField = addEditWeightWrapper.find('input[type="date"]');
    expect(dateInputField).toHaveLength(1);
  });
  
  it('should have one number input field', () => {
    const weightInputField = addEditWeightWrapper.find('input[type="number"]');
    expect(weightInputField).toHaveLength(1);
  });

  it('should have update and cancel btns', () => {
    const updateBtn = addEditWeightWrapper.find('.btn.btn--block.btn--primary');
    const cancelBtn = addEditWeightWrapper.find('.btn.btn--block.btn--secondary');
    expect(updateBtn).toHaveLength(1);
    expect(cancelBtn).toHaveLength(1);
  });

  it('should have weight and date fields filled from props', () => {
    const currentData = {};
    const addEditWeightWrapper = mount(<AddEditWeight currentData={currentData} weight={60} date={'2021-10-28'} />)
    let dateInput = addEditWeightWrapper.find('input[type="date"]');
    let weightInput = addEditWeightWrapper.find('input[type="number"]');
    expect(weightInput.instance().value).toBe("60");
    expect(dateInput.instance().value).toBe("2021-10-28");
  });

})
