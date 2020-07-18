import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMMemberModifyView({containerState, itemState, appPrefs, 
	itemPrefForms, onSave, onCancel, inputChange}) {
    
	let formName = "PM_MEMBER_FORM";
	let formTitle = "Member";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder containerState={containerState} itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} 
    	inputFields={itemState.inputFields} appPrefs={appPrefs} prefForms={itemState.itemPrefForms} onSave={onSave} onCancel={onCancel} 
    	inputChange={inputChange}/>
    );
}


PMMemberModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func,
  selectChange: PropTypes.func
};
