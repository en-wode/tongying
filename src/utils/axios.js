/** Created by wanan on 2019-04-20
 *作者:wanan
 */
import axios from 'axios'
const host = 'http://localhost:80/api';


const getNewList=()=>{
  return axios.get(host+"selfJson/news.json")
    .then( (response)=> response.data.data)
    .catch(function (error) {
      console.log(error);
    })
}

export {getNewList};
