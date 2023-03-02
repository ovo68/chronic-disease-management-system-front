<template>
  <sn-card-with-title class="margin-top-20">
    <person-info-about-family-title slot="title"/>
    <person-info-about-family-table slot="content"/>
  </sn-card-with-title>
</template>

<script>
import PersonInfoAboutFamilyTable
  from "@/components/content/sick/person_info/children/family/children/PersonInfoAboutFamilyTable";
import PersonInfoAboutFamilyTitle
  from "@/components/content/sick/person_info/children/family/children/PersonInfoAboutFamilyTitle";
export default {
  name: "PersonInfoAboutFamily",

  components: {
    PersonInfoAboutFamilyTable,
    PersonInfoAboutFamilyTitle
  }
}
</script>

<style scoped>

</style>