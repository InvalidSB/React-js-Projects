import React, { useState } from 'react'

import {useSpeechSynthesis} from "react-speech-kit"
import {Box,Button} from '@material-ui/core'
import TextField from '@material-ui/core/TextField';


function Speech() {
    const[input,setInput]=useState('')
    const{speak}=useSpeechSynthesis()
    return (
            <div className="inner">
                <h1 className="heading">Text to Speech With React js</h1>
            <Box component="span" >
            <TextField
          id="outlined-multiline-static"
          multiline
          rows={10}
          placeholder="Enter your text here....."
        value={input}
          onChange={(e)=>setInput(e.target.value)}
          fullWidth
          variant="outlined"
          style={{marginBottom:30,color:"white"}}
          margin="normal"
          inputProps={{style: {fontSize: 28,lineHeight:1.5}}} // font size of input text
        
        />
 
  
</Box>
  <Button  
  color="secondary"
  variant="contained"
  fullWidth
   onClick={()=>speak({text:input})}>
      Speech
  </Button>
            </div>
    )
}

export default Speech
