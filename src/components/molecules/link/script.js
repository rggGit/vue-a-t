import SvgIconAtom from '@/components/atoms/svg-icon'

export default {
  name: 'link-molecule',
  components: {
    SvgIconAtom
  },
  props: {
    path: {
      type: String,
      required: true
    },
    text: {
      type     : String,
      required : true
    },
    icon: String,
    iconTitle: String,
    hideText: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    textStatus () {
      return this.hideText
    }
  }
};