pipeline {
    agent any

    stages {
        stage('git - clone') {
            steps {
                git branch: 'main', credentialsId: 'github-magikabdul', url: 'git@github.com:magikabdul/gatsby-adream-task-storybook-styled-components.git'
            }
        }
        
        stage('npm') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        
        stage('deploy') {
            steps {
                sh 'sudo scp -r -P 5000 -i /home/kris/.ssh/wordic /var/lib/jenkins/workspace/gatsby-adream-storybook/public/ kris@wordic.it:/home/kris/jenkins_uploads/gatsby'
                sh 'sudo ssh -p 5000 -i /home/kris/.ssh/wordic kris@wordic.it "sudo cp -r /home/kris/jenkins_uploads/gatsby/. /home/kris/frontend/gatsby"'
                sh 'sudo ssh -p 5000 -i /home/kris/.ssh/wordic kris@wordic.it "sudo rm -r /home/kris/jenkins_uploads/gatsby/"'
            }
        }
    }
    
    post {
        always {
            discordSend description: "**Build** #${currentBuild.number}\n**Changes:** ${currentBuild.changeSets}",

                footer: "Result - ${currentBuild.currentResult}",
                result: currentBuild.currentResult,

                title: 'Gatsby - ADream Task',
                webhookURL: 'https://discord.com/api/webhooks/898256243934769172/KTE8ox2f67OcPKm_9yEApZ4d_M0gHzIDlgGppJbLF2Vbfzf-e_XutioGe_3yHZgn7Ggm'
        }
    }
}
