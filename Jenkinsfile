pipeline {
    agent any
    tools {
        nodejs '12.18.3'
    }

    options {
        timeout(time: 2, unit: 'MINUTES')
    }

    stages {
        stage('Install dependencies') {
            steps {
                sh 'npm install'
            }
        }

        stage('Run tests') {
            steps {
                sh 'npm run test'
            }
        }
    }
}