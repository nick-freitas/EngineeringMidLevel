/**
 * The Types that are to bind to instances for dependency injection.
 *
 * Types should always be Symbols
 * @type {{}}
 */
export const iocTypes = {
    AppConfig: Symbol("AppConfig"),
    DbConnector: Symbol("DbConnector"),
    Server: Symbol("Server"),
    Routes: Symbol("Routes"),
    ClientService: Symbol("ClientService"),
    ClientRoute: Symbol("ClientRoute"),
    ClientController: Symbol("ClientController")
};
