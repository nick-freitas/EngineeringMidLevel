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
    SimpleTestRoute: Symbol("SimpleTestRoute"),
    Routes: Symbol("Routes")
};
