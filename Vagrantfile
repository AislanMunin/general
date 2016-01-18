# -*- mode: ruby -*-
# vi: set ft=ruby :

#unless Vagrant.has_plugin?("vagrant-docker-compose")
#  system("vagrant plugin install vagrant-docker-compose")
#  puts "Dependencies installed, please try the command again."
#  exit
#end

VAGRANTFILE_API_VERSION = "2"

Vagrant.configure(2) do |config|
  
  config.vm.box = "ubuntu/trusty64"
  config.vm.network "public_network"
  #config.vm.network "private_network", ip: "192.168.50.100"
  config.vm.hostname = "devenv"
  config.ssh.forward_agent = true
  config.ssh.shell = "bash -c 'BASH_ENV=/etc/profile exec bash'"
  
  ########### prod env setup - begin ##############
  #config.vm.provision :docker
  #config.vm.provision :docker_compose, yml: "/vagrant/docker-compose.yml", rebuild: true, project_name: "lares", run: "always"
  ########### prod env setup - end ################

  ########### dev env setup - begin ###############
  #config.vm.provision :shell, inline: "rm /var/lib/apt/lists/* -vf"
  config.vm.provision :shell, inline: "curl -sL https://deb.nodesource.com/setup_4.x | sudo -E bash -"
  #config.vm.provision :shell, inline: "apt-get update"
  config.vm.provision :shell, inline: "apt-get -y install nodejs build-essential git git-core vim zsh tmux"
  config.vm.provision :shell, privileged: false,
    inline: "if [ ! -d ~/.oh-my-zsh ]; then git clone git://github.com/robbyrussell/oh-my-zsh.git ~/.oh-my-zsh; fi"
  config.vm.provision "file", source: ".zshrc", destination: ".zshrc"
  config.vm.provision "file", source: ".gitconfig", destination: ".gitconfig"
  config.vm.provision "file", source: ".vimrc", destination: ".vimrc"
  config.vm.provision :shell, inline: "chsh -s /bin/zsh vagrant"
  ########### dev env setup - end #################
end
