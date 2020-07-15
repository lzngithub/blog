import url from '../url';
import axios from '@/plugins/axios/index';

const getList = params => {
    return axios.get(url.region.getList,params);
}

export {
    getList,
}