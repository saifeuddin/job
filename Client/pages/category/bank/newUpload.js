const axios = require('axios')



const newUpload = ({ post }) => {

    return (
        <div>
            <form action="http://localhost:4000/bank" method='POST'>
                <input type="text" name='title'/>
                <input type="file" name='thumbImg'/>
                <input type="file" name='jobImg'/>

                <button type='submit'> Submit</button>
            </form>
        </div>
    )

}

export default newUpload