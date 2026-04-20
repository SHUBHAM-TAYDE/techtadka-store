@Library('techtadka-lib') _

pipeline {
    agent any

    environment {
        IMAGE_NAME = "techtadka-store:v1"
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/SHUBHAM-TAYDE/techtadka-store.git',
                    credentialsId: 'github-cred'
            }
        }

        stage('Build Docker Image') {
            steps {
                buildDocker(IMAGE_NAME)
            }
        }

        stage('Deploy App') {
            steps {
                deployApp(IMAGE_NAME)
            }
        }
    }
}
