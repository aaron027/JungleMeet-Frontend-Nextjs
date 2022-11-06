pipeline {
    agent any
    options {
        ansiColor('xterm')
    }
    stages{
        stage('Sonarqube') {
            environment {
                scannerHome = tool 'Sonarqube_scanner'
            }
            steps {
                withSonarQubeEnv('sonarqube_7.9.6') {
                   echo 'The code scanning is running...'
                   sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('terraform stage') {
            steps {
                withAWS(credentials: 'AWS_Credentials', region: 'us-east-1') {
                    // some block
                    dir('terraform') {
                        sh '''
                            terraform init  -migrate-state
                            terraform validate
                            terraform plan -out=junglemeet.plan
                            terraform apply junglemeet.plan
                        '''
                    }
                }
            }
        }
         stage('deploy to S3') {
            steps {
                withAWS(credentials: 'AWS_Credentials', region: 'us-east-1') {
                    
                     sh '''
                            npm install
                            npm install --save-dev prettier-eslint
                            npm run build
                            aws s3 cp out s3://www.aaron027.click --recursive
                        '''
                }
            }
        } 
        
    }  
   
    post {
        always{
            echo 'I will always say Hello again! test for webhook'
            cleanWs()
        }
        success
        {
            emailext (
                subject: '$DEFAULT_SUBJECT',
                body: '$DEFAULT_CONTENT',
                to: '$DEFAULT_RECIPIENTS',
                recipientProviders: [ requestor() ]
                )
        }
        failure
        {
            emailext (
                subject: '$DEFAULT_SUBJECT',
                body: '$DEFAULT_CONTENT',
                recipientProviders: [developers(), requestor(), culprits()]
                )
        }
        
    }
}
