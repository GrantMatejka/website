import { CommandMenu } from '@/components/command-menu';
import { ProjectCard } from '@/components/project-card';
import { ReadingCard } from '@/components/reading-card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Section } from '@/components/ui/section';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger
} from '@/components/ui/tooltip';
import { RESUME_DATA } from '@/data/resume-data';
import { FileIcon, MailIcon } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.about}`,
  description: RESUME_DATA.summary
};

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <p className="max-w-md text-pretty font-mono text-sm text-muted-foreground">
              {RESUME_DATA.about}
            </p>
            <div className="flex gap-x-1 pt-1 font-mono text-sm text-muted-foreground print:hidden">
              {RESUME_DATA.contact.resume ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a href={`/${RESUME_DATA.contact.resume}`}>
                          <FileIcon className="size-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Resume</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : null}
              {RESUME_DATA.contact.email ? (
                <TooltipProvider>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a href={`mailto:${RESUME_DATA.contact.email}`}>
                          <MailIcon className="size-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>Email</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ) : null}
              {RESUME_DATA.contact.social.map((social) => (
                <TooltipProvider key={social.name}>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        className="size-8"
                        variant="outline"
                        size="icon"
                        asChild
                      >
                        <a href={social.url}>
                          <social.icon className="size-4" />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p>{social.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              {RESUME_DATA.contact.email ? (
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <span className="underline">{RESUME_DATA.contact.email}</span>
                </a>
              ) : null}
            </div>
          </div>

          <Avatar className="size-28">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback>{RESUME_DATA.initials}</AvatarFallback>
          </Avatar>
        </div>
        <Section>
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className=" inline-flex items-center justify-center gap-x-1 font-semibold leading-none">
                    <a className="hover:underline" href={work.link}>
                      {work.company}
                    </a>

                    <span className="invisible inline-flex gap-x-1 md:visible">
                      {work.badges.map((badge) => (
                        <Badge
                          variant="secondary"
                          className="align-middle text-xs"
                          key={badge}
                        >
                          {badge}
                        </Badge>
                      ))}
                    </span>
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {work.start} - {work?.end ?? 'Present'}
                  </div>
                </div>

                <h4 className="font-mono text-sm leading-none">{work.title}</h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs">
                {work.description}
              </CardContent>
            </Card>
          ))}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Education</h2>
          {RESUME_DATA.education.map((education) => (
            <Card key={education.school}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    {education.school}
                  </h3>
                  <div className="text-sm tabular-nums text-gray-500">
                    {education.start} - {education.end}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="mt-2">{education.degree}</CardContent>
            </Card>
          ))}
        </Section>
        <Section>
          <h2 className="text-xl font-bold">Skills</h2>
          <div className="flex flex-wrap gap-1">
            {RESUME_DATA.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </Section>

        <Section className="scroll-mb-16 print:hidden">
          <h2 className="text-xl font-bold">Projects</h2>
          <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
            {RESUME_DATA.projects.map((project) => (
              <ProjectCard
                key={project.title}
                title={project.title}
                description={project.description}
                tags={project.techStack}
                link={'link' in project ? project.link.href : undefined}
              />
            ))}
          </div>

          {RESUME_DATA.writings.length > 0 && (
            <>
              <h2 className="text-xl font-bold">Writing Blurbs</h2>
              <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
                {RESUME_DATA.writings.map((writing) => (
                  <ProjectCard
                    key={writing.title}
                    title={writing.title}
                    description={writing.description}
                    tags={writing.tags}
                    link={'link' in writing ? writing.link.href : undefined}
                  />
                ))}
              </div>
            </>
          )}

          {RESUME_DATA.readings.length > 0 && (
            <>
              <h2 className="text-xl font-bold">Some Readings</h2>
              <div className="-mx-3 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 print:grid-cols-3 print:gap-2">
                {RESUME_DATA.readings.map((reading) => (
                  <ReadingCard
                    key={reading.title}
                    title={reading.title}
                    author={reading.author}
                    review={reading.review}
                    rating={reading.rating}
                    tags={reading.tags}
                    link={reading?.link ? reading.link.href : undefined}
                  />
                ))}
              </div>
            </>
          )}
        </Section>
      </section>

      <CommandMenu
        links={[
          ...RESUME_DATA.contact.social.map((socialMediaLink) => ({
            url: socialMediaLink.url,
            title: socialMediaLink.name
          }))
        ]}
      />
    </main>
  );
}
