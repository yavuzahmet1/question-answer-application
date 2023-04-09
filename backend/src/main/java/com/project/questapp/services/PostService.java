package com.project.questapp.services;

import com.project.questapp.repositories.PostRepository;
import org.springframework.stereotype.Service;

@Service
public class PostService {
    private PostRepository postRepository;

    public PostService(PostRepository postRepository) {
        this.postRepository = postRepository;
    }
}
