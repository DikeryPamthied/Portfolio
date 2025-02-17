<template>
  <section id="services" class="padding-x mb-20">
    <div class="flex w-full flex-col">
      <h1
        id="what-i-do"
        v-html="whatIDo"
        class="heading-1 font-extrabold uppercase"
      ></h1>

      <div
        id="services-text"
        class="grid-gap mt-[5%] grid grid-cols-12 justify-end text-flax-smoke-300 opacity-0 lg:grid"
      >
        <p
          class="col-start-0 heading-6 col-span-4 text-nowrap text-center text-flax-smoke-300/85 md:col-start-4"
        >
          ( SERVICES )
        </p>
        <p
          class="heading-4 font-fancy col-span-8 w-full text-balance sm:font-semibold md:col-span-5"
        >
        Striking visuals don’t happen by chance—they're crafted with purpose. 
        I design eye-catching graphics and edit compelling videos that captivate
         audiences and bring stories to life effortlessly. 
        </p>
      </div>
    </div>

    <div class="relative mt-12 w-full lg:mt-[10%]">
      <div class="mt-12 flex flex-col justify-between gap-y-16">
        <ServicesCard
          v-for="(card, index) in servicesCardProps"
          :key="index"
          :number="index + 1"
          :title="card.title"
          :body="card.body"
          :headings="card.headings"
          :shape="card.shape"
          class="sticky border-t border-flax-smoke-500/50 bg-[#0B0B0A]"
          :class="getStyle(index)"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import { animateSplitText } from '@/animations';
  import { textSplitterIntoChar } from '@/functions';
  import { onBeforeMount, onMounted, ref } from 'vue';
  import { ServicesCard } from '..';

  const whatIDo = ref('My services /');

  const servicesCardProps = [
    {
      title: 'Engaging Visuals',
      body: 'I create high-quality designs and videos that leave a lasting impression, blending aesthetics with storytelling to bring your ideas to life.',
      headings: [
        'Graphic Design Excellence', 
        'Professional Video Editing', 
        'Creative Motion Graphics'
      ],
      shape: `<svg viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0C103.395 53.7596 146.24 96.6052 200 100C146.24 103.395 103.395 146.24 100 200C96.6052 146.24 53.7596 103.395 0 100C53.7596 96.6052 96.6052 53.7596 100 0Z"/>
  </svg>
  `,
    },
    {
      title: 'Advanced Visual Solutions',
      body: 'I specialize in producing advanced visual content that enhances your brand, from dynamic animations to seamless video transitions.',
      headings: [
        'High-Quality Animations',
        'Cinematic Video Effects',
        'Brand-Focused Visuals',
      ],
      shape: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
  <path d="M127.14 200C99.9942 200 99.9943 167.423 72.8487 167.423C41.6048 167.423 0 158.386 0 127.133C0 99.9885 32.5678 99.9885 32.5678 72.8445C32.5678 41.6139 41.6048 0 72.8602 0C100.006 0 100.006 32.5774 127.151 32.5774C158.384 32.5774 200 41.6139 200 72.8675C200 100.012 167.421 100.012 167.421 127.156C167.409 158.444 158.384 200 127.14 200Z" />
  </svg>
  `,
    },
    {
      title: 'Visual Optimization',
      body: 'Your content deserves to stand out. By refining colors, transitions, and effects, I ensure your visuals are polished, engaging, and impactful.',
      headings: [
        'Aesthetic Color Grading',
        'Smooth Visual Flow',
        'High-Resolution Output',
      ],
      shape: `<svg  viewBox="0 0 200 200"  xmlns="http://www.w3.org/2000/svg">
  <path d="M100 0L170.711 29.2893L200 100L170.711 170.711L100 200L29.2893 170.711L0 100L29.2893 29.2893L100 0Z" />
  </svg>
  `,
    },
  ];

  onBeforeMount(() => {
    whatIDo.value = textSplitterIntoChar('What I do /', true);
  });

  onMounted(() => {
    animateSplitText('#what-i-do .letters', '#services-text', 0.7, 0.01, 0);
  });

  const getStyle = (index: number) => {
    if (index === 0) {
      return 'top-[calc(20vh_+_0em)] mb-[17.25em]';
    }

    if (index === 1) {
      return 'top-[calc(20vh_+_5.75em)] mb-[11.5em]';
    }

    if (index === 2) {
      return 'top-[calc(20vh_+_11.5em)] mb-[5.75em]';
    }
  };
</script>
