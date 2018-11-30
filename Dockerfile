# setup a centos image with ozbcore binary components
FROM centos:latest
MAINTAINER Chris Kleeschulte <chrisk@bitpay.com>
RUN yum -y install git curl which xz tar findutils
RUN groupadd ozbcore
RUN useradd ozbcore -m -s /bin/bash -g ozbcore
ENV HOME /home/ozbcore
USER ozbcore
RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash
RUN /bin/bash -l -c "nvm install v4 && nvm alias default v4"
RUN /bin/bash -l -c "npm install ozbcore -g"

