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
            echo 'Pipeline finished successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

