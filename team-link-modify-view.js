import React, {Component} from 'react';
import PropTypes from 'prop-types';
import FormBuilder from '../../coreView/common/form-builder';

export default function PMTeamLinkModifyView({containerState, itemState, appPrefs, onSave, onCancel, inputChange}) {
    
	let formName = "PM_TEAM_PRODUCT_FORM";
	let formTitle = "Team Product";
	let formGroup = "FORM1";

    return (
    		<FormBuilder containerState={containerState} itemState={itemState} formName={formName} formTitle={formTitle} formGroup={formGroup} 
        	inputFields={itemState.inputFields} appPrefs={appPrefs} prefForms={itemState.itemPrefForms} onSave={onSave} onCancel={onCancel} 
        	inputChange={inputChange}/>
    );
}


PMTeamLinkModifyView.propTypes = {
  containerState: PropTypes.object,
  itemState: PropTypes.object,
  appPrefs: PropTypes.object,
  itemPrefForms: PropTypes.object,
  onSave: PropTypes.func,
  onCancel: PropTypes.func,
  inputChange: PropTypes.func
};
