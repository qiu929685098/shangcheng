<template>
  <div>
    <Detail :detailId="id" />
  </div>
</template>

<script>
import Detail from "@/components/Detail";
export default {
  props: ["id"],
  components: {
    Detail
  }
};
</script>
<style lang="scss" scoped></style>
