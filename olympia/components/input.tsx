import * as React from 'react'
import { SelectInput as Select } from '../components/selectInput';
import { Options } from '../interfaces/index'

type Props = {
    labelClass: string
    labelName: string
    name: string
    inputClass: string
    type: string
    value: string
    placeholder?: any
    onChange: any
    options: Options[]
  }

const Input: React.FunctionComponent<Props> = ({ 
    labelClass,
    labelName,
    name,
    value,
    inputClass,
    type,
    placeholder,
    onChange,
    options

}) => {
        <div>
          <label htmlFor={name} className={labelClass}>
            {labelName}
          </label>
          <div>
          {type ==="select"?(
            <Select
              value={value}
              onChange={onChange}
              options={options}
              placeholder={placeholder}
              name={name}
              className={inputClass}
            />
            )
            : (
              <input
              type={type}
              className={inputClass}
              name={name}
              value={value}
              onChange={onChange}
              placeholder={placeholder}
            />
            )
            }
        </div>
        </div>
    }
  
//   Input.propTypes = {
//     name: PropTypes.string.isRequired,
//     value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     id: PropTypes.string.isRequired,
//     labelName: PropTypes.string.isRequired,
//     labelClass: PropTypes.string,
//     onChange: PropTypes.func.isRequired,
//     placeholder: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
//     type: PropTypes.string,
//   };
  
//   Input.defaultProps = {
//     value: 'text',
//     type: 'text',
//     labelClass: 'input1',
//     placeholder: '',
//   };
  
  export default Input;
  