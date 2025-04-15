# Proxmox

Oi012540.

192.168.50.10 pve1.lenovo.m900.MJ04XX69 pve1-MJ04XX69
192.168.50.20 pve2.lenovo.m900.MJ04T5J8 pve2-MJ04T5J8
192.168.50.30 pve3.lenovo.m900.MJ05B30K pve3-MJ05B30K

# Pos Installation

## Change hostname and hosts file

```bash
hostnamectl set-hostname pve1-MJ04XX69
hostnamectl set-hostname pve2-MJ04T5J8
hostnamectl set-hostname pve3-MJ05B30K
```

<!-- sed line 2 with the corrent content -->
```bash
sed -i '2s/.*/192.168.50.10 pve1.lenovo.m900.MJ04XX69 pve1-MJ04XX69/' /etc/hosts
sed -i '2s/.*/192.168.50.20 pve2.lenovo.m900.MJ04T5J8 pve2-MJ04T5J8/' /etc/hosts
sed -i '2s/.*/192.168.50.30 pve3.lenovo.m900.MJ05B30K pve3-MJ05B30K/' /etc/hosts
```

## Proxmox VE Post Install

`bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/post-pve-install.sh)"`

## Proxmox VE CPU Scaling Governor

`bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/scaling-governor.sh)"`

# Proxmox VE Processor Microcode

`bash -c "$(wget -qLO - https://github.com/tteck/Proxmox/raw/main/misc/microcode.sh)"`

## Ceph

Install Ceph 17.2 on Proxmox VE and run the following commands:

```bash
apt install -y ceph-mgr-dashboard
ceph mgr module enable dashboard
# ceph dashboard create-self-signed-cert
openssl req -newkey rsa:2048 -nodes -x509 \
  -keyout /root/dashboard-key.pem -out /root/dashboard-crt.pem -sha512 \
  -days 3650 -subj "/CN=IT/O=ceph-mgr-dashboard" -utf8
ceph config-key set mgr/dashboard/key -i /root/dashboard-key.pem
ceph config-key set mgr/dashboard/crt -i /root/dashboard-crt.pem
echo ceph-password > password.txt
ceph dashboard ac-user-create admin -i password.txt administrator
rm password.txt
ceph mgr module disable dashboard
ceph mgr module enable dashboard
```
<!-- https://www.virtualizationhowto.com/community/proxmox-help/how-to-get-ceph-dashboard-working-in-proxmox-8/ -->

After that, you can log into the Ceph dashboard at https:// <<your_ip_address>>:8443

# Format disk

```bash
fdisk /dev/nvme0n1 # Format disk d and w to write
wipefs -fa /dev/nvme0n1 # Remove all partitions
```
# Remover node

pvecm nodes
pvecm delnode pve2-MJ04T5J8
```



dmsetup remove nvme0n1
dmsetup remove ceph--ccb5bafc--ef64--4bb1--8def--6e68bd0180d7-osd--block--22e03456--547f--48a3--ae50--99de40762290
cd /etc/
ls
cd /etc/pve/
ls
nano datacenter.cfg 
nano ceph.conf 

pvecm delnode pve7