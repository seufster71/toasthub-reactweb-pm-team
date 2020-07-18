import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMRoleModifyView({containerState, item, inputFields, appPrefs, 
	itemPrefForms, onSave, onCancel, inputChange}) {
    
	let formName = "PM_Role_FORM";
	let formTitle = "Role";
	let formGroup = "FORM1";
    
    return (
    	<FormBuilder containerState={containerState} item={item} formName={formName} formTitle={formTitle} formGroup={formGroup} inputFields={inputFields} appPrefs={appPrefs} prefForms={itemPrefForms} onSave={onSave} onCancel={onCancel} onChange={inputChange}/>
    );
}


PMRoleModifyView.propTypes = {
  containerState: PropTypes.object,
  item: PropTypes.object,
  appPrefs: PropTypes.object,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
