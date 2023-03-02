import SnInput from "@/components/common/sn/input/SnInput";
import SnSelect from "@/components/common/sn/select/SnSelect";
import SnCardNoTitle from "@/components/common/sn/card/SnCardNoTitle";
import SnCardWithTitle from "@/components/common/sn/card/SnCardWithTitle";
import SnMustText from "@/components/common/sn/text/SnMustText";
import SnPage from "@/components/common/sn/page/SnPage";
import SnDatePicker from "@/components/common/sn/date_choose/SnDatePicker";
import SnDatePickerWithRound from "@/components/common/sn/date_choose/SnDatePickerWithRound";
import SnInputComplex from "@/components/common/sn/input/SnInputComplex";
import SnInputWithAdvice from "@/components/common/sn/input/SnInputWithAdvice";
import SnRowHasFourCol from "@/components/common/sn/layout/row/SnRowHasFourCol";
import SnRowHasTwoCol from "@/components/common/sn/layout/row/SnRowHasTwoCol";
import SnSearchInput from "@/components/common/sn/input/SnSearchInput";
import SnSelectCreateItem from "@/components/common/sn/select/SnSelectCreateItem";
import SnSelectHasSelect from "@/components/common/sn/select/SnSelectHasSelect";
import SnTable from "@/components/common/sn/table/SnTable";
import SnTableHasCheckbox from "@/components/common/sn/table/SnTableHasCheckbox";
import SnTableHasSelect from "@/components/common/sn/table/SnTableHasSelect";
import SnText from "@/components/common/sn/text/SnText";
import SnThreeColSpace from "@/components/common/sn/layout/SnThreeColSpace";
import SnTitle from "@/components/common/sn/text/SnTitle";
import SnImageInCircle from "@/components/common/sn/avatar/SnImageInCircle";
import SnFlexAppointElement from "@/components/common/sn/flex/SnFlexAppointElement";
import SnDivHasBorder from "@/components/common/sn/div/SnDivHasBorder";
import SnTimeLine from "@/components/common/sn/time_line/SnTimeLine";
import SnRowHasManyDiv from "@/components/common/sn/div/SnRowHasManyDiv";
import SnShowByButtonNoCard from "@/components/common/sn/button/SnShowByButtonNoCard";
import SnShowByButtonWithCard from "@/components/common/sn/button/SnShowByButtonWithCard";
import SnDialogLeft from "@/components/common/sn/dialog/SnDialogLeft";
export default {
  install(Vue) {
    Vue.component('SnDialogLeft', SnDialogLeft)
    Vue.component('SnShowByButtonNoCard', SnShowByButtonNoCard)
    Vue.component('SnShowByButtonWithCard', SnShowByButtonWithCard)
    Vue.component('SnRowHasManyDiv', SnRowHasManyDiv)
    Vue.component('SnTimeLine', SnTimeLine)
    Vue.component('SnDivHasBorder', SnDivHasBorder)
    Vue.component('SnFlexAppointElement', SnFlexAppointElement)
    Vue.component('SnImageInCircle', SnImageInCircle)
    Vue.component('SnInput', SnInput)
    Vue.component('SnCardNoTitle', SnCardNoTitle)
    Vue.component('SnCardWithTitle', SnCardWithTitle)
    Vue.component('SnMustText', SnMustText)
    Vue.component('SnPage', SnPage)
    Vue.component('SnSelect', SnSelect)
    Vue.component('SnDatePicker', SnDatePicker)
    Vue.component('SnDatePickerWithRound', SnDatePickerWithRound)
    Vue.component('SnInputComplex', SnInputComplex)
    Vue.component('SnInputWithAdvice', SnInputWithAdvice)
    Vue.component('SnRowHasFourCol', SnRowHasFourCol)
    Vue.component('SnRowHasTwoCol', SnRowHasTwoCol)
    Vue.component('SnSearchInput', SnSearchInput)
    Vue.component('SnSelectCreateItem', SnSelectCreateItem)
    Vue.component('SnSelectHasSelect', SnSelectHasSelect)
    Vue.component('SnTable', SnTable)
    Vue.component('SnTableHasCheckbox', SnTableHasCheckbox)
    Vue.component('SnTableHasSelect', SnTableHasSelect)
    Vue.component('SnText', SnText)
    Vue.component('SnThreeColSpace', SnThreeColSpace)
    Vue.component('SnTitle', SnTitle)
  }
}

