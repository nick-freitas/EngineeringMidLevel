import subprocess


# installs all of the module's npm packages
def installNpmPackages():
    response = subprocess.run(
        ["npm", "i"], stdout=subprocess.PIPE, shell=True)
    print(response.stdout.decode('utf-8'))
    return


# install all global npm packages needed by this module
def installGlobalNpmPackages():
    return


def main():
    print('Building API')
    # installGlobalNpmPackages()
    # installNpmPackages()
    # todo setup db with sql file
    print('Finished Building API')


main()
