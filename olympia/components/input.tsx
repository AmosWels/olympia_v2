// import * as React from 'react'
// import { SelectInput } from '../components/selectInput';
// import { Options } from '../interfaces/index'

// type Props = {
//     labelClass: string
//     labelName: string
//     name: string
//     inputClass: string
//     type: string
//     value: string
//     placeholder: string
//     onChange: any
//     options: any
//   }

//   export const Input: React.FunctionComponent<Props> = ({ 
//     labelClass,
//     labelName,
//     name,
//     value,
//     inputClass,
//     type,
//     placeholder,
//     onChange,
//     options

// }) => { return (
//         <div>
//           <label htmlFor={name} className={labelClass}>
//             {labelName}
//           </label>
//           <div>
//           {type ==="select"?(
//             <SelectInput>
//               value={value}
//               onChange={onChange}
//               options={options}
//               placeholder={placeholder}
//               name={name}
//               className={inputClass}
//             </SelectInput>
//             )
//             : (
//               <input
//               type={type}
//               className={inputClass}
//               name={name}
//               value={value}
//               onChange={onChange}
//               placeholder={placeholder}
//             />
//             )
//             }
//         </div>
//         </div>
// )
//     }
  
//   export default Input;
  