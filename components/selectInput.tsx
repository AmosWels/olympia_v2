import React from 'react';
import { Options } from '../interfaces/index'

/**
 * Reusable Image Selector Input Field
 *
 * @param {Object} selectInputObject
 *
 * @returns {JSX}
 */

type Props = {
    labelClass: string,
    wrapperClassName: string,
    id: string,
    labelText: string,
    name: string,
    isValue: string,
    selectInputClassName: string,
    value: string,
    onChange: any,
    placeholder: string,
    options: Options[],
    children: string,
    placeholderValue: string,
    required: string,
  }
export const SelectInput :React.FunctionComponent<Props> = ({
  wrapperClassName,
  id,
  labelText,
  name,
  isValue,
  selectInputClassName,
  value,
  onChange,
  placeholder,
  options,
  children,
  placeholderValue,
  required,
  ...otherProps
}) => (
  <div className={wrapperClassName}>
    <label htmlFor={id}>
      {labelText}
      <select
        name={name}
        id={id}
        // className={selectInputClassName}
        value={value}
        onChange={onChange}
        {...otherProps}
        // required={required}
      >
        {/* render place holder in case its provided */}
        {placeholder && <option value={placeholderValue}>{placeholder}</option>}

        {/* Render the array options if provided.
         If you provide both options and children, details in the options will be rendered
        */}
        {options &&
          options.length &&
          options.map(option => (
            <option value={isValue ? option.name : option.id} key={option.id}>
              {option.name}
            </option>
          ))}

        {children && !options && children}

        {/* warn user that he needs to atleast provide options or children */}
        {!options &&
          !children &&
          'You need to provide atleast children or options to the select element'}
      </select>
    </label>
  </div>
);

export default SelectInput;
