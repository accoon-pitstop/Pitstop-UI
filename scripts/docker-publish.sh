DOCKER_TAG='latest'
docker login -u="$DOCKER_USERNAME" -p="$DOCKER_PASSWORD"
ls
docker build -t accoon.pitstop.ui:$DOCKER_TAG -f ./.docker/nginx.dockerfile .
docker tag accoon.pitstop.ui:$DOCKER_TAG $DOCKER_USERNAME/accoon.pitstop.ui:$DOCKER_TAG
docker push $DOCKER_USERNAME/accoon.pitstop.ui:$DOCKER_TAG