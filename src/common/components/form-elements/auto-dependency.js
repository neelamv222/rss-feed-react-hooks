import React from 'react';
import {every, callbackFunc} from '../../../utils/helpers';

// AutoDependency component is a wrapper component used to enable/disable component based on the dependencies passed.
const AutoDependency = ({children, dependencies}) => {
  const checkDisability = () => {
    if (typeof dependencies === "boolean") {
      return dependencies;
    }
    return every(dependencies, callbackFunc)
  }
  const element = React.cloneElement(children, {disabled: checkDisability()});
  return (
    <>
      {element}
    </>
  );
}

export default AutoDependency;
