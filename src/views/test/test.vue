<template>
  <div class="test">
    <video ref="remoteVideo"></video>
  </div>
</template>
<script>
export default {
  data () {
    return {
      answerSDP: '',
      offerSDP: '',
      pcLocal: null,
      pcRemote: null,
      localStream: null,
      constraints: {
        audio: false,
        video: true
      },
      videoSize: 200
    };
  },
  mounted () {
    this.pcLocal = new RTCPeerConnection({
      iceServers: [
        {
          urls: ['stun:stun.l.google.com:19302', 'turn:110.53.180.47:19303'],
          username: 'PixelStreamingUser',
          credential: 'AnotherTURNintheroad'
        }
      ]
    });
    console.log(this.pcLocal);
    this.pcLocal.ontrack = (e) => {
      console.log('pcRemote.onTrack');
      this.$refs.remoteVideo.srcObject = e.streams[0];
    };

    // this.localStream.getTracks().forEach((track) => {
    //   this.pcLocal.addTrack(track, this.localStream);
    // });

    // const offerOptions = {
    //   offerToRecieveAudio: 0,
    //   offerToRecieveVideo: 1
    // };

    // const getanswer = (desc) => {
    //   this.pcRemote.setLocalDescription(desc);
    //   this.answerSDP = desc.sdp;
    //   // send desc to signal
    //   // pcLocal receive desc from signal
    //   this.pcLocal.setRemoteDescription(desc);
    //   console.log('getanswer');
    // };

    // const getOffer = (desc) => {
    //   this.pcLocal.setLocalDescription(desc);
    //   this.offerSDP = desc.sdp;
    //   // send desc to signal
    //   // pcRemote receive desc from signal
    //   this.pcRemote.setRemoteDescription(desc);
    //   this.pcRemote
    //     .createAnswer()
    //     .then(getanswer)
    //     .catch((err) => console.log('远端answer创建失败', err));
    // };

    // this.pcLocal
    //   .createOffer(offerOptions)
    //   .then(getOffer)
    //   .catch((err) => console.log('本地offer创建失败', err));

    // // 这几个事件是异步回调。
    // /**
    //  *
    //  */
    // this.pcLocal.onicecandidate = (e) => {
    //   // pcLocal send candidate to signal
    //   // pcRemote revieve candidate from signal
    //   console.log('pcLocal.onicecandidate');
    //   this.pcRemote.addIceCandidate(e.candidate);
    // };
    // this.pcRemote.onicecandidate = (e) => {
    //   console.log('pcRemote.onicecandidate');
    //   this.pcLocal.addIceCandidate(e.candidate);
    // };

    // this.pcRemote.ontrack = (e) => {
    //   console.log('pcRemote.onTrack');
    //   this.$refs.remoteVideo.srcObject = e.streams[0];
    // };
  }
};
</script>
