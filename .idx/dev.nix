{pkgs}: {
  channel = "stable-23.11";
  packages = [
    pkgs.nodejs_20
  ];
  idx.extensions = [
    "vue.volar"
  ];
  idx.previews = {
    previews = {
      web = {
        command = [
          "nx"
          "dev"
          "@fibbojs/playground-2d"
          "--port"
          "$PORT"
        ];
        # Then open a terminal and run : nx watch --projects=@fibbojs/2d -- nx build @fibbojs/2d
        manager = "web";
      };
    };
  };
}