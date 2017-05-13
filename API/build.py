import subprocess

sequelizePath = ".\\node_modules\.bin\sequelize"


def createStatusModel():
    response = subprocess.run(
        [sequelizePath, "model:create", "--force", "--name", "Status", "--attributes",
         "\"status:string\""], stdout=subprocess.PIPE, shell=True)
    print(response.stdout.decode('utf-8'))
    return


def installNpmPackages():
    response = subprocess.run(
        ["npm", "i"], stdout=subprocess.PIPE, shell=True)
    print(response.stdout.decode('utf-8'))
    return


def main():
    print('Building API')
    # installNpmPackages()
    createStatusModel()
    print('Finished Building API')


main()
