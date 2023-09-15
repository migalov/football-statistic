<template>
  <div class="dropdown-wrapper" ref="dropDown">
    <div class="dropdown-selected-option" @click="isDropDownVisible = !isDropDownVisible">{{ mappedSelectedOption }}</div>
    <div class="dropdown-clear" @click="clearValue">❌</div>
    <transition name="slide-fade">
      <div
        class="options-wrapper"
        v-if="isDropDownVisible"
      >
        <input class="dropdown-search" type="text" v-model="search" @input="changeInput" />
        <div
          class="option"
          v-for="(option, index) in filteredData"
          :key="index"
          @click="toggleOptionSelect"
        >
          <img class="option-icon" v-if="option.icon" :src="option.icon" :alt="option.title">
          <span :class="option.icon && `option-title`">{{ option.title || option }}</span>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
  const props = defineProps({
    options: {
      type: Array,
      required: true
    },
    modelValue: {
      default: null
    },
    placeholder: {
      type: String,
      default: "Please select something"
    }
  })

  const filteredData = ref(props.options)

  const dropDown = ref(null);

  const search = ref(null);

  const changeInput = (e) => {
    console.log(e.target.value);
    if (search) {
      filteredData.value = props.options.filter(item => {
          return item.title.toLowerCase().includes(search.value.toLowerCase())
      })
    }
    else {
      filteredData.value = props.options
    }
  }

  const emit = defineEmits(["update:modelValue"]);

  const selectedOption = ref(null);

  const isDropDownVisible = ref(false);

  const mappedSelectedOption = computed(() => {
    return (selectedOption.value?.title || selectedOption.value) || props.placeholder
  })

  const toggleOptionSelect = option => {

    let value = option.target.innerText;
    selectedOption.value = value;
    emit("update:modelValue", value);
    isDropDownVisible.value = false;

  }

  const clearValue = () => {
    if(selectedOption) {
      selectedOption.value = "";
      emit("update:modelValue", "");
    }
    isDropDownVisible.value = false;
  }

  const closeDropDown = element => {
    if(!dropDown.value.contains(element.target)) {
      isDropDownVisible.value = false;
    }
  }

  onMounted(() => {
    window.addEventListener("click", closeDropDown);
  })

  onBeforeUnmount(() => {
    window.removeEventListener("click", closeDropDown);
  })

</script>

<style scoped lang="scss">
  .dropdown-wrapper {
    width: 100%;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    margin: 0 auto;
  }

  .dropdown-selected-option {
    display: flex;
    align-items: center;
    width: inherit;
    border-radius: 4px;
    border: 1px solid #E6E6E6;
    background: #FFF;
    height: 48px;
    padding: 10px 16px;
  }

  .dropdown-search {
    height: 48px;
    padding: 8px 24px 8px 16px;
    width: inherit;
    border-radius: 8px;
    border: 1px solid #e6e6e6;
  }

  .dropdown-clear {
    position: absolute;
    right: 16px;
    top: 50%;
    transform: translateY(-50%);
  }

  .options-wrapper {
    display: flex;
    flex-direction: column;
    gap: 4px;
    position: absolute;
    padding: 4px;
    top: 56px;
    width: 100%;
    z-index: 1;
    background-color: #ffffff;
    border: 1px solid #737373;
    border-radius: 8px;
  }

  .option {
    padding: 10px 16px;
    border: 1px solid transparent;
    transition: ease .3s;
    display: flex;
    align-items: center;
    
    &:hover {
      background: #F6F2FF;
      border-radius: 8px;
      border: 1px solid #4918B2;
    }
    .slide-fade-enter-active {
      transition: all .3s ease-out;
    }
    .slide-fade-leave-active {
      transition: all .3s cubic-bezier(0.39, 0.575, 0.565, 1);
    }
    .slide-fade-enter-from,
    .slide-fade-leave-to {
      transform: translate(-4px);
      opacity: 0;
    }
  }

  .option-icon {
    width: 24px;
  }

  .option-title {
    margin: 0 0 0 1rem;
  }
</style>