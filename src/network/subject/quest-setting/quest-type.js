
import network from '@src/network/index';
const preUrlPath = '/quest-setting';

export default {
    async list () {
        const res = await network.get({
            url: `${preUrlPath}/list`
        });
        return res;
    }
}
