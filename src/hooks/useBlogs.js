import { useQuery } from "@tanstack/react-query";
import { blogsApi } from "../utils/api";

// Hook for fetching all published blogs
export const useBlogs = () => {
  return useQuery({
    queryKey: ["published-blogs"],
    queryFn: blogsApi.getBlogs,
  });
};

// Hook for fetching a single blog by slug
export const useBlogBySlug = (slug) => {
  return useQuery({
    queryKey: ["blog", slug],
    queryFn: () => blogsApi.getBlogBySlug(slug),
    enabled: !!slug, // Only run the query if slug is provided
  });
};
