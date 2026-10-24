pipeline {
    agent any

    stages {
        stage('Build test image') {
            steps {
                sh 'docker build -t toolshop-bdd .'
            }
        }

        stage('Run tests') {
            steps {
                sh 'docker rm -f toolshop-run || true'
                sh 'docker run --name toolshop-run toolshop-bdd'
            }
        }
    }

    post {
        always {
            // Copy the reports out of the test container, pass or fail
            sh 'docker cp toolshop-run:/app/playwright-report ./playwright-report || true'
            sh 'docker cp toolshop-run:/app/test-results ./test-results || true'
            sh 'docker rm -f toolshop-run || true'

            junit allowEmptyResults: true, testResults: 'test-results/junit.xml'
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
    }
}
