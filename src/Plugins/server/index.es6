import Server from './server';

class ServerPlugin {
    constructor(options) {
        options.static = options.static || [];
        this.options = options;
    }

    init(proxyPlugin) {
        /**
         * 需要 proxyPlugin 来帮助确认是否代理，不代理则开启 bodyParser
         * @type {Server}
         */
        this.server = new Server(Object.assign(this.options, {
            ifProxy: proxyPlugin.enable
        }));
    }

    runOnSuccess() {
        this.server.createServer();
    }
}
export default ServerPlugin;
