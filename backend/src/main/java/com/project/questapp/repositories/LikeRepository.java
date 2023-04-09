package com.project.questapp.repositories;

import com.project.questapp.entities.Like;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LikeRepository extends JpaRepository<Like,Long> {
}
