import type { Skill } from "@/types";
import { cn } from "@/lib/cn";

const levelColor: Record<Skill["level"], string> = {
  expert: "border-primary/50 text-primary bg-primary/10",
  advanced: "border-secondary/40 text-secondary bg-secondary/10",
  intermediate: "border-border text-muted bg-surface-light",
};

interface SkillBadgeProps {
  skill: Skill;
}

export function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium border",
        levelColor[skill.level]
      )}
    >
      {skill.name}
    </span>
  );
}
