<template>
  <ion-page>
    <ion-content :fullscreen="true">
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonPage, IonContent } from '@ionic/vue';

export default  {
  name: 'Tab1',
  components: { IonContent, IonPage }
}
</script>