Vagrant.configure(2) do |config|
  config.vm.box = "node"
  config.vm.box_url = "../node-devenv2.box"
  config.vm.hostname = "node-devenv"
  config.ssh.forward_agent = true
  # config.vm.network "forwarded_port", guest: 3000, host: 8080
  # config.vm.network "private_network", ip: "192.168.33.10"
  config.vm.network "public_network"
  config.push.define "atlas" do |push|
   push.app = "YOUR_ATLAS_USERNAME/YOUR_APPLICATION_NAME"
  end
  config.vm.provider "virtualbox" do |v|
    v.customize ["setextradata", :id, "VBoxInternal2/SharedFoldersEnableSymlinksCreate/v-root", "1"]
  end
end
