pipeline {
    agent any
    environment {
        CI = 'true'
    }
    stages {
        stage('Checkout') {
            steps {
                git branch: 'prak8', url: 'https://github.com/FajarTeguhPermana/D_2200016016_Fajar-Teguh-Permana.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                bat 'npm install'
            }
        }
        stage('Run Unit Tests') {
            steps {
                bat 'npm test'
            }
        }
        stage('Build') {
            steps {
                echo 'Building the application...'
                // Tambahkan perintah build jika diperlukan
            }
        }
        stage('Deploy') {
            steps {
                echo 'Deploying the application...'
                // Tambahkan perintah deploy jika diperlukan
            }
        }
    }
    post {
        success {
            emailext(
                subject: 'Build Succeeded',
                body: 'Pipeline completed successfully.',
                to: 'fajarprogramming@gmail.com'
            )
        }
        failure {
            emailext(
                subject: 'Build Failed',
                body: 'Pipeline failed. Please check the console log in Jenkins.',
                to: 'fajarprogramming@gmail.com'
            )
        }
    }


}

