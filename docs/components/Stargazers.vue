<template>
  <ul class="stargazers">
    <li v-for="stargazer in stargazers" :key="stargazer.id">
      <a :href="stargazer.html_url">
        <img :src="stargazer.avatar_url" :alt="stargazer.login">
        <span>{{ stargazer.login }}</span>
      </a>
    </li>
  </ul>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { onMounted, ref } from "vue";

interface Stargazer {
	avatar_url: string;
	events_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	gravatar_id: string;
	html_url: string;
	id: number;
	login: string;
	node_id: string;
	organizations_url: string;
	received_events_url: string;
	repos_url: string;
	site_admin: boolean;
	starred_url: string;
	subscriptions_url: string;
	type: string;
	url: string;
	user_view_type: string;
}
const stargazers: Ref<Stargazer[]> = ref([]);

onMounted(() => {
	fetch("https://api.github.com/repos/fibbojs/fibbo/stargazers?per_page=100")
		.then((response) => response.json())
		.then((data) => {
			// Reverse the array to show the latest stargazers first
			stargazers.value = data.reverse();
		})
		.catch((error) => console.error("Error fetching stargazers:", error));
});
</script>

<style>
.stargazers {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  list-style: none;
  padding: 0;
}

.stargazers li {
  display: flex;
  align-items: center;
}

.stargazers a {
  position: relative;
  display: flex;
  align-items: center;
  text-decoration: none;
}

.stargazers a img {
  width: 4rem;
  height: 4rem;
  transition: all 0.2s;
  border-radius: 50%;
}

.stargazers a span {
  position: absolute;
  padding: 0.5rem;
  left: 50%;
  background-color: var(--vp-c-bg-alt);
  border-radius: 0.25rem;
  opacity: 0;
  transform: scaleY(0.8) translateY(-100%) translateX(-50%);
  transition: all 0.2s;
  z-index: 1;
}

.stargazers a:hover span {
  opacity: 1;
  transform: scaleY(1) translateY(-100%) translateX(-50%);
}

.stargazers a:hover img {
  transform: scale(1.1);
}
</style>
