<template>
	<div id="div-swiper">
		<div class="swiper" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
			<div v-for="(item,index) in banners" :key="index" class="slide">
				<a :href="item.link">
					<img :src="item.image" alt="">
				</a>
			</div>
		</div>
		<!-- <slot name="indicator"></slot> -->
		<div class="indicator">
			<slot name="indicator" v-if="showIndicator && slideCount>1">
				<div v-for="(item,index) in slideCount" class="indi-item" :class="{active:(index+1)==currentIndex}" :key="index"></div>
			</slot>
		</div>
	</div>
</template>

<script>
	export default {
		name: 'swiper',
		props: {
			banners:{
				type:Array,
				default:[]
			},
			interval: {
				type: Number,
				default: 3000
			},
			animDuration: {
				type: Number,
				default: 300
			},
			moveRatio: {
				type: Number,
				default: 0.25
			},
			showIndicator: {
				type: Boolean,
				default: true
			}
		},
		data() {
			return {
				slideCount: 0,
				totalWidth: 0,
				swiperStyle: {},
				scrolling: false,
				currentIndex: 1,
				playTimer:null,
				distance:0,
				currentX:0,
				startX:0
			}
		},
		mounted() {
			setTimeout(() => {
				this.handleDom();
				this.startTimer();
			}, 100)
		},
		methods: {
			startTimer() {
				this.playTimer = window.setInterval(() => {
					this.currentIndex++;
					this.scrollContent(-this.currentIndex * this.totalWidth);
				}, this.interval);
			},
			stopTimer() {
				window.clearInterval(this.playTimer);
			},
			scrollContent(currentPosition) {
				this.scrolling = true;
				this.swiperStyle.transition = `transform ${this.animDuration}ms`;
				this.setTransform(currentPosition);
				this.checkPosition();
				this.scrolling = false;
			},
			checkPosition() {
				setTimeout(() => {
					this.swiperStyle.transition = '0ms';
					if (this.currentIndex > this.banners.length ) {
						this.currentIndex = 1;
					} else if (this.currentIndex < 1) {
						this.currentIndex = this.banners.length;
					}
					this.setTransform(-this.currentIndex * this.totalWidth);
					// this.$emit('transitionEnd', this.currentIndex - 1);
				}, this.animDuration);
			},
			setTransform(position) {
				this.swiperStyle.transform = `translate3d(${position}px,0,0)`;
				this.swiperStyle['-webkit-transform'] = `translate3d(${position}px,0,0)`;
				this.swiperStyle['-ms-transform'] = `translate3d(${position}px,0,0)`;
			},
			handleDom() {
				let swiperEl = document.querySelector('.swiper');
				let slideEls = swiperEl.getElementsByClassName('slide');
				this.slideCount = this.banners.length;
				if (this.slideCount > 1) {
					let cloneFirst = slideEls[0].cloneNode(true);
					let cloneLast = slideEls[this.slideCount - 1].cloneNode(true);
					swiperEl.insertBefore(cloneLast, slideEls[0]);
					swiperEl.appendChild(cloneFirst);
					this.totalWidth = swiperEl.offsetWidth;
					this.swiperStyle = swiperEl.style;
				}
				this.setTransform(-this.totalWidth);
			},
			touchStart(e) {
				if (this.scrolling) return
				this.stopTimer();
				this.startX = e.touches[0].pageX;
			},
			touchMove(e) {
				this.currentX = e.touches[0].pageX;
				this.distance = this.currentX - this.startX
				let currentPosition = -this.currentIndex * this.totalWidth;
				let moveDistance = this.distance + currentPosition;
				this.setTransform(moveDistance);
			},
			touchEnd(e) {
				let currentMove = Math.abs(this.distance);
				if (currentMove == 0) {
					return;
				} else if (this.distance > 0 && currentMove > this.totalWidth + this.moveRatio) {
					this.currentIndex--;
				} else if (this.distance < 0 && currentMove > this.totalWidth + this.moveRatio) {
					this.currentIndex++
				}
				this.scrollContent(-this.currentIndex * this.totalWidth)
				this.startTimer()
			},
			previous() {
				this.changeItem(-1);
			},
			next() {
				this.changeItem(1)
			},
			changeItem(index) {
				this.stopTimer();
				this.currentIndex += index;
				this.scrollContent(-this.currentIndex * this.totalWidth);
				this.startTimer();
			}
		}
	}
</script>

<style scoped>
	#div-swiper {
		overflow: hidden;
		position: relative;
	}

	.swiper {
		display: flex;
	}

	.indicator {
		box-sizing: border-box;
		width: 8px;
		height: 8px;
		border-radius: 4px;
		background-color: #fff;
		line-height: 8px;
		text-align: center;
		font-size: 12px;
		margin: 0 5px;
	}

	.indi-item {
		background-color: rgb(21, 62, 46, 1.0);
	}
</style>
