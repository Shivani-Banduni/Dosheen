import React from 'react'
import {
    FormControl,
    FormLabel,
    Input,
    FormErrorMessage,
    FormHelperText,
     Button, ButtonGroup
  } from '@chakra-ui/react'
import axios from 'axios'
export const Signup = () => {
    const [data, setdata] = React.useState("");
    const [input, setInput] = React.useState('')
    const [pass, setpass] = React.useState("");
    const [pas, setpas] = React.useState("");
    // const [arr,setarr]=React.useState(false)




    const handleInputChange = (e) => setInput(e.target.value)
  
    const isError = input == ''

    const handlechange = (e) => {
        setdata(e.target.value);
        // console.log(data)

      };

    const handlechange3 = (e) => {
        setpass(e.target.value);
        // console.log(data)
      };

      const handlechange4 = (e) => {
        setpas(e.target.value);
    
      };

      const handleclick=(()=>{
        axios.post("http://localhost:8080/posts",{
          Name:data,
          Email:input,
        
        })
      
     
    })
  return (
    <div className='main'>
        <h1 className='head1'>CREATE ACCOUNT</h1>
        <FormControl isRequired>
  <FormLabel >First name</FormLabel>
  <Input placeholder='First name' onChange={handlechange} value={data}/>
</FormControl>

<FormControl isRequired>
<FormLabel>Email</FormLabel>
      <Input type='email' value={input} onChange={handleInputChange} />
      {!isError ? (
        <FormHelperText>
          Enter the email you'd like to receive the newsletter on.
        </FormHelperText>
      ) : (
        <FormErrorMessage>Email is required.</FormErrorMessage>
      )}
              {input.length>1&& !input.includes("@gmail.com") ? "Invalid id" :null}
              {/* && setarr(true)} */}

</FormControl>


<FormControl isRequired>
<FormLabel>Password</FormLabel>
        <Input  type="number" id="pass" onChange={handlechange3} />

        </FormControl>

        <FormControl isRequired>
        <FormLabel>Confirm Password</FormLabel>
        <Input type="number" id="con-pass" onChange={handlechange4} />
        {pas !== pass ? "Password does not match" : null}
        </FormControl>
        <Button  disabled={data =='' || input=='' || pass=="" || pas==''} onClick={handleclick} className='button' colorScheme='blue'>Button</Button>
    </div>
  )
}
