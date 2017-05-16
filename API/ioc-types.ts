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
    DbSchema: Symbol("DbSchema"),

    ClientService: Symbol("ClientService"),
    ClientRoute: Symbol("ClientRoute"),
    ClientController: Symbol("ClientController"),
    ClientDbSchema: Symbol("ClientDbSchema"),
    ClientValidator: Symbol("ClientValidator"),

    ProductAreaService: Symbol("ProductAreaService"),
    ProductAreaRoute: Symbol("ProductAreaRoute"),
    ProductAreaController: Symbol("ProductAreaController"),
    ProductAreaDbSchema: Symbol("ProductAreaDbSchema"),
    ProductAreaValidator: Symbol("ProductAreaValidator")
};
